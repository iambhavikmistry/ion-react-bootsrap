import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { ellipse, square, triangle } from "ionicons/icons";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { useEffect } from "react";

setupIonicReact();
import { routes } from "./Constants/routes";

const App = () => {
  const renderRoutes = routes.map((route, i) => {
    return (
      <IonApp>
        <IonReactRouter>
          <IonRouterOutlet>
            <Route
              key={i}
              path={route.path}
              component={route.component}
              exact={route.exact}
            />
          </IonRouterOutlet>
        </IonReactRouter>
      </IonApp>
    );
  });
  return renderRoutes;
};

export default App;
