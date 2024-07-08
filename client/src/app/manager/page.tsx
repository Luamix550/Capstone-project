import AdministrationComponent from "../../AdminComponents/AdministrationComponent"
import { AdminProvider } from "../context/adminContext"

export default function manager() {
    return (
        <AdminProvider>
            <AdministrationComponent />
        </AdminProvider>
    )
}