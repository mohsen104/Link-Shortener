import { nanoid } from "nanoid";
import URLModel from "../models/URL.model.js";

const URLController = {
    createShortLink: async (req, res, next) => {
        try {
            const { url } = req.body;
            if (!url) return res.status(400).json({ error: "url is required" });
            const shortId = nanoid(8);
            await URLModel.create({
                redirectUrl: url,
                shortId,
                visitHistory: []
            });
            return res.status(201).json({ message: "created", shortId })
        } catch (error) {
            next(error);
        }
    },
    getURL: async (req, res, next) => {
        try {
            const { shortId } = req.params;
            if (!shortId) return res.status(400).json({ error: "shortId is required" });
            const url = await URLModel.findOneAndUpdate(
                { shortId },
                {
                    $push: {
                        visitHistory: {
                            timestamps: Date.now()
                        }
                    }
                });
            return res.redirect(url.redirectUrl);
        } catch (error) {
            next(error);
        }
    },
}

export default URLController;