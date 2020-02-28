export default function() {
  this.namespace = "/api";
  this.get("/projects"); // returns all projects in the mirage database
  this.get("/projects/:id");
}
