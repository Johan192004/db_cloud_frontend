# 🗺️ CrudCloud Frontend - Roadmap

## ✅ Completado

### Fase 1: Landing Page
- [x] Configurar Tailwind CSS
- [x] Crear estructura de carpetas escalable
- [x] Componentes reutilizables (Button, Card, Container)
- [x] Header con navegación responsive
- [x] Hero Section
- [x] Features Section (6 características)
- [x] Database Engines Section (6 motores)
- [x] Pricing Section (3 planes)
- [x] How It Works Section (6 pasos)
- [x] CTA Section
- [x] Footer
- [x] README y documentación

---

## 🚧 Próximas Fases

### Fase 2: Autenticación (Próximo Commit)
- [ ] Página de Login
  - [ ] Formulario con validación
  - [ ] Integración con `/auth/login`
  - [ ] Manejo de errores
  - [ ] Almacenamiento de token JWT
- [ ] Página de Register
  - [ ] Formulario con validación
  - [ ] Tipos de usuario (Individual / Organization)
  - [ ] Integración con `/auth/register`
  - [ ] Manejo de errores
- [ ] Context API para autenticación
- [ ] Protected routes
- [ ] Redirect logic

### Fase 3: Dashboard (Commit Posterior)
- [ ] Layout del Dashboard
- [ ] Sidebar/Navbar
- [ ] Vista principal con stats
- [ ] Gestión del perfil de usuario
- [ ] Visualización de plan actual

### Fase 4: Gestión de Instancias (Futuro)
- [ ] Listado de instancias
- [ ] Crear nueva instancia
- [ ] Ver detalles de instancia
- [ ] Acciones (pausar, reanudar, eliminar)
- [ ] Rotación de contraseñas
- [ ] Descarga de PDF con credenciales

### Fase 5: Planes y Pagos (Futuro)
- [ ] Vista de cambio de plan
- [ ] Integración con Mercado Pago
- [ ] Flujo de pago
- [ ] Confirmación y actualización de plan

---

## 📋 Convenciones del Proyecto

### Conventional Commits
- `feat:` - Nueva funcionalidad
- `fix:` - Corrección de bugs
- `refactor:` - Refactorización de código
- `style:` - Cambios de estilos (no afectan lógica)
- `docs:` - Documentación
- `test:` - Tests
- `chore:` - Tareas de mantenimiento

### Estructura de Branches
- `main` - Producción
- `dev` - Desarrollo principal
- `feature/*` - Features específicos
- `fix/*` - Hotfixes

### Estándares de Código
- TypeScript strict mode
- Componentes funcionales
- Props typing obligatorio
- Nombres descriptivos
- Comentarios cuando sea necesario
- Reutilización de componentes

---

## 🎨 Guía de Estilos

### Colores
- **Primary**: Azul (#3b82f6 - #1e3a8a)
- **Secondary**: Cyan (#06b6d4 - #164e63)
- **Success**: Verde
- **Error**: Rojo
- **Warning**: Amarillo

### Tipografía
- **Font**: Inter (Google Fonts)
- **Tamaños**: Usar clases de Tailwind

### Espaciado
- Usar sistema de spacing de Tailwind
- Consistencia en padding/margin

---

## 🔗 Enlaces Útiles

- **Backend Repo**: (agregar cuando esté disponible)
- **Docs**: (agregar cuando esté disponible)
- **Figma/Diseños**: (si aplica)
- **Azure Boards**: (agregar cuando esté configurado)

---

_Última actualización: 10 de Noviembre, 2025_
