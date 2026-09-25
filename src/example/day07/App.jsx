import { Route, Routes } from "react-router-dom";
import NotFound from "./NotFound";
import List from "./List";
import Write from "./Write";
export default function App() {
    return (
        <Routes>
            <Route path="/list" element={<List />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/write" element={<Write />} />

        </Routes>
    );
}