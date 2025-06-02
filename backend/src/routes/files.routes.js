const { Router } = require("express");
const fileController = require("../controllers/files.controller");

const router = Router();

/**
 * @swagger
 * tags:
 * - name: Files
 * description: Operations related to file data and lists from the external API.
 */

/**
 * @swagger
 * /files/data:
 *   get:
 *     summary: Retrieve formatted data from CSV files.
 *     tags: [Files]
 *     parameters:
 *       - in: query
 *         name: filename
 *         schema:
 *           type: string
 *         description: Optional filename to retrieve data for a specific file.
 *     responses:
 *       200:
 *         description: Successfully retrieved formatted file data.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   file:
 *                     type: string
 *                     example: file1.csv
 *                   lines:
 *                     type: array
 *                     items:
 *                       type: object
 *                       properties:
 *                         text:
 *                           type: string
 *                           example: SomeText
 *                         number:
 *                           type: integer
 *                           example: 12345
 *                         hex:
 *                           type: string
 *                           example: abcdef1234567890abcdef1234567890
 *       404:
 *         description: File or data Not Found.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: File or data Not Found
 *       500:
 *         description: Internal Server Error.
 */
router.get("/data", fileController.getFileData);

/**
 * @swagger
 * /files/list:
 *   get:
 *     summary: Retrieve a list of available files from the external API.
 *     tags: [Files]
 *     responses:
 *       200:
 *         description: Successfully retrieved the list of files.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 files:
 *                   type: array
 *                   items:
 *                     type: string
 *                     example: file1.csv
 *       404:
 *         description: No files found.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: No files found
 *       500:
 *         description: Internal Server Error.
 */
router.get("/list", fileController.getFileList);

module.exports = router;
