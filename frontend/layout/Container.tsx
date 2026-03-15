import { ReactNode } from "react";

const Container = ({children}: {children: ReactNode}) => {
    return (
        <div className="px-8 mx-auto max-w-296">
            {children}
        </div>
    )
}

export default Container;