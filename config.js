System.config({
  "baseURL": "/",
  "transpiler": "traceur",
  "paths": {
    "*": "*.js",
    "github:*": "jspm_packages/github/*.js"
  }
});

System.config({
  "map": {
    "angular": "github:angular/bower-angular@1.4.1",
    "angular-route": "github:angular/bower-angular-route@1.4.1",
    "bootstrap": "github:twbs/bootstrap@3.3.5",
    "css": "github:systemjs/plugin-css@0.1.13",
    "text": "github:systemjs/plugin-text@0.0.2",
    "traceur": "github:jmcriffey/bower-traceur@0.0.88",
    "traceur-runtime": "github:jmcriffey/bower-traceur-runtime@0.0.88",
    "github:angular/bower-angular-route@1.4.1": {
      "angular": "github:angular/bower-angular@1.4.1"
    },
    "github:twbs/bootstrap@3.3.5": {
      "jquery": "github:components/jquery@2.1.4"
    }
  }
});

