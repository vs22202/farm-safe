import React from "react";
import { createRoot } from 'react-dom/client';
import App from "./App";
import { fcminit } from "./init-fcm";
createRoot(document.getElementById("root")).render(<App />);
fcminit();

