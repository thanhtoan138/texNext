import HeaderCar from "../car/header-car/page";
export default function LoginLayout({ children }) {
    return (
        <div>
            <HeaderCar />
            <main>{children}</main>

        </div>
    );
}
