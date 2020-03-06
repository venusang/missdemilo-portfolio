import { module, test } from "qunit";
import { visit, currentURL } from "@ember/test-helpers";
import { setupApplicationTest } from "ember-qunit";
import { setupMirage } from "ember-cli-mirage/test-support";

async function setUpServer(server) {
  server.createList("project", 3);
}

module("Acceptance | missdemilo portfolio", function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  test("visiting /", async function(assert) {
    await visit("/");
    await setUpServer(this.server);
    assert.equal(currentURL(), "/");
  });

  test("visiting /projects", async function(assert) {
    await visit("/projects");
    await setUpServer(this.server);
    assert.equal(currentURL(), "/projects");
  });
});
