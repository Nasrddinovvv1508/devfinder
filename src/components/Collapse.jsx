import {
    Collapse,
    Button,
    Card,
    Typography,
    CardBody,
} from "@material-tailwind/react";

import Barchart from './Barchart'
import { useState } from "react";

function CollapseDefault() {
    const [open, setOpen] = useState(false);

    const toggleOpen = () => setOpen((cur) => !cur);

    return (
        <div className="mt-[40px] w-full">
            <div className="w-full flex justify-center">
                
            </div>
            <Collapse open={open}>
                <Card className="my-4 mx-auto flex flex-col items-center">
                    <CardBody className="w-full bg-base-100">
                        <Barchart />
                    </CardBody>
                </Card>
            </Collapse>
        </div>
    );
}

export default CollapseDefault