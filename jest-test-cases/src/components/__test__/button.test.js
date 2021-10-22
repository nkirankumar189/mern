import Button from "../button";
import React from "react";
import { ReactDOM } from "react-dom";
import {render,screen} from "@testing-library/react";

it("check button render without crash",()=>{
    const div = document.createElement("div");
    ReactDOM.render(<Button></Button>,div);
});
 test("check text avalibility",()=>{
        render(<Button/>);
        const my_text = screen.getByText(/click Me/i);
        expect(my_text).toBeinthedocument();
 })