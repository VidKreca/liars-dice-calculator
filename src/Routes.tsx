import { Route, Routes as RouterRoutes } from "react-router-dom";
import { CalculatorPage } from "./pages";

export function Routes() {
  return (
    <RouterRoutes>
      <Route index element={<CalculatorPage />} />
    </RouterRoutes>
  );
}
