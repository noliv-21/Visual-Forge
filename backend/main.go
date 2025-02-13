package main

import (
	"myproject/routes"

	"github.com/gofiber/fiber/v2"
)

func main() {

	app := fiber.New()

	routes.Route(app)

	app.Listen(":3000")
}
