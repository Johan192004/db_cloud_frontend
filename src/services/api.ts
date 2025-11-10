import type { LoginRequest, RegisterRequest, AuthResponse } from '../types';

// Base URL - ajusta esto según tu backend
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8080/api';

/**
 * Función auxiliar para hacer requests con manejo automático de errores
 */
async function apiRequest<T>(
  endpoint: string,
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH' = 'GET',
  body?: unknown
): Promise<T> {
  // Construir headers
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  };

  // Agregar token JWT si existe
  const token = localStorage.getItem('token');
  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  try {
    // 🔍 Debug: Ver qué se está enviando
    console.log('🚀 Request:', {
      url: `${API_BASE_URL}${endpoint}`,
      method,
      headers,
      body: body ? JSON.stringify(body) : undefined,
    });

    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      method,
      headers,
      body: body ? JSON.stringify(body) : undefined,
      credentials: 'include', // Permitir cookies/credenciales
    });

    // 🔍 Debug: Ver la respuesta
    console.log('📡 Response:', {
      status: response.status,
      statusText: response.statusText,
      headers: Object.fromEntries(response.headers.entries()),
    });

    // Si la respuesta no es OK, lanzar error con más información
    if (!response.ok) {
      // Intentar parsear la respuesta como JSON primero
      let errorMessage = `Error ${response.status}: ${response.statusText}`;
      
      try {
        const contentType = response.headers.get('content-type');
        
        if (contentType && contentType.includes('application/json')) {
          // Si es JSON, extraer el mensaje
          const errorData = await response.json();
          console.log('❌ Error JSON:', errorData);
          errorMessage = errorData.message || errorData.error || errorMessage;
        } else {
          // Si no es JSON, leer como texto
          const errorText = await response.text();
          console.log('❌ Error Text:', errorText);
          if (errorText) {
            errorMessage = errorText;
          }
        }
      } catch (parseError) {
        // Si falla el parsing, usar el mensaje por defecto
        console.error('❌ Error parsing error response:', parseError);
      }

      throw new Error(errorMessage);
    }

    // Parsear y retornar JSON
    const data = await response.json();
    console.log('✅ Success:', data);
    return data as T;
  } catch (error) {
    console.error('💥 Fetch Error:', error);
    // Re-lanzar el error sin modificar el mensaje
    if (error instanceof Error) {
      throw error;
    }
    throw new Error('Error desconocido en la petición');
  }
}

/**
 * Servicio de autenticación usando Fetch API
 */
export const authService = {
  /**
   * Login de usuario
   */
  login: async (credentials: LoginRequest): Promise<AuthResponse> => {
    return apiRequest<AuthResponse>('/auth/login', 'POST', credentials);
  },

  /**
   * Registro de nuevo usuario
   */
  register: async (data: RegisterRequest): Promise<AuthResponse> => {
    return apiRequest<AuthResponse>('/auth/register', 'POST', data);
  },

  /**
   * Obtener perfil del usuario (requiere token)
   */
  getProfile: async (): Promise<AuthResponse> => {
    return apiRequest<AuthResponse>('/auth/profile', 'GET');
  },

  /**
   * Logout - elimina el token del localStorage
   */
  logout: (): void => {
    localStorage.removeItem('token');
  },
};

/**
 * Función genérica para hacer cualquier tipo de request
 * Úsala para endpoints que no sean auth
 */
export { apiRequest };
