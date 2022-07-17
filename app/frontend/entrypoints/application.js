import * as ActiveStorage from "@rails/activestorage";
import Rails from "@rails/ujs";
import Turbolinks from "turbolinks";
import "../../assets/stylesheets/application.css";

ActiveStorage.start();
Rails.start();
Turbolinks.start();
