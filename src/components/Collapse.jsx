import {
    Collapse,
    Button,
    Card,
    Typography,
    CardBody,
} from "@material-tailwind/react";

import Piechart from './Piechart'
import { useState } from "react";

function CollapseDefault() {
    const [open, setOpen] = useState(false);

    const toggleOpen = () => setOpen((cur) => !cur);

    return (
        <div className="mt-[40px] w-full">
            <div className="w-full flex justify-center">
                <Button onClick={toggleOpen} variant="text" className="flex items-center gap-2">
                    Read More{" "}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="h-5 w-5"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                        />
                    </svg>
                </Button>
            </div>
            <Collapse open={open}>
                <Card className="my-4 mx-auto flex flex-col items-center">
                    <CardBody className="w-full bg-base-100">
                        <Piechart />
                    </CardBody>
                </Card>
            </Collapse>
        </div>
    );
}

export default CollapseDefault