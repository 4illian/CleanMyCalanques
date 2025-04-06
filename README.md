# CleanMyCalanques ��️

CleanMyCalanques is a modern web application dedicated to the preservation and cleaning of Marseille's calanques. This platform enables users to engage in cleaning actions and track the environmental impact of their activities. The project was coded in 2 days at the "Orange Vélodrome" stadium in Marseille.

## 🏗️ Architecture

The project is structured in three main components:

### Backend (Node.js)
- **Port**: 8080
- Classic MVC structure:
  - `models/`: Data model definitions
  - `controllers/`: Business logic
  - `middleware/`: Authentication and validation middleware
  - `migrations/`: Database migration scripts
  - `config/`: Application configuration

### Frontend (React)
- **Port**: 3000
- Modern React structure:
  - `Components/`: Reusable components
  - `Pages/`: Main application pages
  - `Assets/`: Static resources
  - `API/`: API service calls

### Database (MySQL)
- **Port**: 3306
- Version: 5.7
- Data persistence via Docker volume

## 🚀 Installation

### Prerequisites
- Docker
- Docker Compose
- Make

### Launching the project

1. Clone the repository:
```bash
git clone https://github.com/4illian/Hackathon-Orange-Velodrome.git
cd CleanMyCalanques
```

2. Launch the application with Make:
```bash
make up
```

This command will:
- Build Docker images
- Start all services
- Initialize the database

3. Access the application:
- Frontend: http://localhost:3000
- Backend API: http://localhost:8080

## 🛠️ Available Make Commands

- `make up` : Start all services
- `make down` : Stop all services
- `make logs` : Display service logs
- `make clean` : Clean containers and volumes
- `make rebuild` : Rebuild images and restart services

## 🔧 Configuration

The `.env` file in the project root contains the necessary environment variables:

```env
MYSQL_DATABASE=cleanmycalanques
MYSQL_USER=user
MYSQL_PASSWORD=password
MYSQL_ROOT_PASSWORD=rootpassword
```
