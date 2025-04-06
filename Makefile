.PHONY: up down logs clean rebuild

# Variables
DOCKER_COMPOSE = docker-compose -f eco4marseille-nodejs/docker-compose.yaml

# Main commands
up:
	@echo "🚀 Starting services..."
	$(DOCKER_COMPOSE) up -d
	@echo "✅ Services started successfully!"

down:
	@echo "🛑 Stopping services..."
	$(DOCKER_COMPOSE) down
	@echo "✅ Services stopped successfully!"

logs:
	@echo "📜 Displaying logs..."
	$(DOCKER_COMPOSE) logs -f

clean:
	@echo "🧹 Cleaning containers and volumes..."
	$(DOCKER_COMPOSE) down -v
	@echo "✅ Cleanup completed successfully!"

rebuild:
	@echo "🏗️ Rebuilding images..."
	$(DOCKER_COMPOSE) down
	$(DOCKER_COMPOSE) build --no-cache
	$(DOCKER_COMPOSE) up -d
	@echo "✅ Rebuild completed successfully!"

# Development commands
install:
	@echo "📦 Installing dependencies..."
	cd eco4marseille-nodejs/project && npm install
	cd eco4marseille-nodejs/calanques && npm install
	@echo "✅ Dependencies installed successfully!"

# Help
help:
	@echo "Available commands:"
	@echo "  make up      - Start all services"
	@echo "  make down    - Stop all services"
	@echo "  make logs    - Display service logs"
	@echo "  make clean   - Clean containers and volumes"
	@echo "  make rebuild - Rebuild images and restart services"
	@echo "  make install - Install project dependencies"
	@echo "  make help    - Display this help" 