import Route from "@ioc:Adonis/Core/Route";
Route.group(() => {
  Route.post("classrooms", "ClassroomsController.create");
  Route.get("classrooms/:id", "ClassroomsController.findOne");
  Route.put("classrooms/:id", "ClassroomsController.update");
  Route.get("classrooms", "ClassroomsController.findAll");
  Route.delete("classrooms/:id", "ClassroomsController.delete");
});