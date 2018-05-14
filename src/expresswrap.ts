import * as express from "express";
import * as aa from "express-async-await";

export function engine(): express.Express {
    return aa(express());
}

export function router(): express.Router {
    return aa(express.Router());
}