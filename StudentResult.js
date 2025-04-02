const express = require("express");
const { addStudentResult } = require("../controllers/student.controller");

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: StudentResults
 *   description: CRUD operations for Student Results
 */

/**
 * @swagger
 * /students/add:
 *   post:
 *     summary: Create new student results
 *     tags: [StudentResults]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/StudentResult'
 *     responses:
 *       201:
 *         description: Student Result created
 */
router.post("/add", addStudentResult);

module.exports = router;