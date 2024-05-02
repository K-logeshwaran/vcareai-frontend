import CustomNav from "../components/custom-nav/custom-nav";

function UnAuthLayout({ children }) {
    return (
        <>
            <CustomNav />
            {children}
        </>
    );
}

export default UnAuthLayout;