/**
 * @swagger
 * /api/v1/resources/list:
 *   get:
 *     summary: Retrieve a paginated list of resources
 *     description: Fetch a paginated list of resources, optionally filtered by a search term.
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           default: 1
 *         description: The page number to retrieve.
 *       - in: query
 *         name: pageSize
 *         schema:
 *           type: integer
 *           default: 100
 *         description: The number of resources per page.
 *       - in: query
 *         name: search
 *         schema:
 *           type: string
 *           default: ""
 *         description: A search term to filter resources by name or description.
 *     responses:
 *       200:
 *         description: A paginated list of resources.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: boolean
 *                   example: false
 *                 code:
 *                   type: integer
 *                   example: 200
 *                 message:
 *                   type: string
 *                   example: "OK"
 *                 metadata:
 *                   type: object
 *                   properties:
 *                     resources:
 *                       type: array
 *                       items:
 *                         type: object
 *                         properties:
 *                           resource_id:
 *                             type: integer
 *                             example: 78
 *                           resource_name:
 *                             type: string
 *                             example: "Resource 78"
 *                           resource_desc:
 *                             type: string
 *                             example: "A resource with description for Resource 78"
 *                           resource_score:
 *                             type: integer
 *                             example: 80
 *                           resource_status:
 *                             type: integer
 *                             example: 1
 *                           resource_created_at:
 *                             type: string
 *                             format: date-time
 *                             example: "2025-01-03T07:15:39.842Z"
 *                           resource_updated_at:
 *                             type: string
 *                             format: date-time
 *                             example: "2025-01-03T07:15:39.842Z"
 *                     totalRecords:
 *                       type: integer
 *                       example: 2
 *                     totalPages:
 *                       type: integer
 *                       example: 2
 *                     currentPage:
 *                       type: integer
 *                       example: 1
 *                     pageSize:
 *                       type: integer
 *                       example: 1
 *                     search:
 *                       type: string
 *                       example: "78"
 *       400:
 *         description: Invalid query parameters.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: boolean
 *                   example: true
 *                 code:
 *                   type: integer
 *                   example: 400
 *                 message:
 *                   type: string
 *                   example: "Invalid query parameters."
 *       500:
 *         description: Internal server error.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: boolean
 *                   example: true
 *                 code:
 *                   type: integer
 *                   example: 500
 *                 message:
 *                   type: string
 *                   example: "Internal Server Error."
 */



/**
 * @swagger
 * /api/v1/resources/create:
 *   post:
 *     summary: Create a new resource
 *     description: Creates a new resource with the provided details.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               resource_name:
 *                 type: string
 *                 example: "Resource test"
 *               resource_desc:
 *                 type: string
 *                 example: "A resource with description for Resource test"
 *               resource_score:
 *                 type: integer
 *                 example: 100
 *     responses:
 *       201:
 *         description: Resource created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: boolean
 *                   example: false
 *                 code:
 *                   type: integer
 *                   example: 201
 *                 message:
 *                   type: string
 *                   example: "Created"
 *                 metadata:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       resource_id:
 *                         type: integer
 *                         example: 217
 *                       resource_name:
 *                         type: string
 *                         example: "Resource test"
 *                       resource_desc:
 *                         type: string
 *                         example: "A resource with description for Resource test"
 *                       resource_score:
 *                         type: integer
 *                         example: 100
 *                       resource_status:
 *                         type: integer
 *                         example: 0
 *                       resource_created_at:
 *                         type: string
 *                         format: date-time
 *                         example: "2025-01-03T10:18:35.541Z"
 *                       resource_updated_at:
 *                         type: string
 *                         format: date-time
 *                         example: "2025-01-03T10:18:35.541Z"
 *       400:
 *         description: Resource creation failed
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: boolean
 *                   example: true
 *                 code:
 *                   type: integer
 *                   example: 400
 *                 message:
 *                   type: string
 *                   example: "Resource not exists"
 *                 metadata:
 *                   type: array
 *                   items: {}
 *       500:
 *         description: Internal server error.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: boolean
 *                   example: true
 *                 code:
 *                   type: integer
 *                   example: 500
 *                 message:
 *                   type: string
 *                   example: "An error occurred while processing the request."
 */



/**
 * @swagger
 * /api/v1/resources/update:
 *   put:
 *     summary: Update an existing resource
 *     description: Updates a resource's details by its ID.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               resource_id:
 *                 type: integer
 *                 example: 206
 *               resource_name:
 *                 type: string
 *                 example: "Resource c"
 *               resource_desc:
 *                 type: string
 *                 example: "A resource with description for Resource b"
 *               resource_score:
 *                 type: integer
 *                 example: 92
 *     responses:
 *       200:
 *         description: Resource updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: boolean
 *                   example: false
 *                 code:
 *                   type: integer
 *                   example: 200
 *                 message:
 *                   type: string
 *                   example: "OK"
 *                 metadata:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       resource_id:
 *                         type: integer
 *                         example: 7
 *                       resource_name:
 *                         type: string
 *                         example: "Resource c"
 *                       resource_desc:
 *                         type: string
 *                         example: "A resource with description for Resource b"
 *                       resource_score:
 *                         type: integer
 *                         example: 92
 *                       resource_status:
 *                         type: integer
 *                         example: 1
 *                       resource_created_at:
 *                         type: string
 *                         format: date-time
 *                         example: "2025-01-03T07:15:39.842Z"
 *                       resource_updated_at:
 *                         type: string
 *                         format: date-time
 *                         example: "2025-01-03T09:57:13.485Z"
 *       400:
 *         description: Resource not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: boolean
 *                   example: true
 *                 code:
 *                   type: integer
 *                   example: 400
 *                 message:
 *                   type: string
 *                   example: "Resource not exists"
 *                 metadata:
 *                   type: array
 *                   items: {}
 *       500:
 *         description: Internal server error.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: boolean
 *                   example: true
 *                 code:
 *                   type: integer
 *                   example: 500
 *                 message:
 *                   type: string
 *                   example: "Internal Server Error"
 */



/**
 * @swagger
 * /api/v1/resources/detail/{resourceId}:
 *   get:
 *     summary: Retrieve a resource's details by its ID
 *     description: Fetches the details of a resource by its unique ID.
 *     parameters:
 *       - in: path
 *         name: resourceId
 *         required: true
 *         schema:
 *           type: integer
 *         description: The ID of the resource to retrieve.
 *     responses:
 *       200:
 *         description: Resource details retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: boolean
 *                   example: false
 *                 code:
 *                   type: integer
 *                   example: 200
 *                 message:
 *                   type: string
 *                   example: "OK"
 *                 metadata:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       resourceId:
 *                         type: integer
 *                         example: 200
 *                       resource_name:
 *                         type: string
 *                         example: "Resource 200"
 *                       resource_desc:
 *                         type: string
 *                         example: "A resource with description for Resource 200"
 *                       resource_score:
 *                         type: integer
 *                         example: 88
 *                       resource_status:
 *                         type: integer
 *                         example: 1
 *                       resource_created_at:
 *                         type: string
 *                         format: date-time
 *                         example: "2025-01-03T07:15:39.842Z"
 *                       resource_updated_at:
 *                         type: string
 *                         format: date-time
 *                         example: "2025-01-03T07:15:39.842Z"
 *       400:
 *         description: Resource not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: boolean
 *                   example: true
 *                 code:
 *                   type: integer
 *                   example: 400
 *                 message:
 *                   type: string
 *                   example: "Resource not exists"
 *                 metadata:
 *                   type: array
 *                   items: {}
 *       500:
 *         description: Internal server error.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: boolean
 *                   example: true
 *                 code:
 *                   type: integer
 *                   example: 500
 *                 message:
 *                   type: string
 *                   example: "Internal Server Error"
 */



/**
 * @swagger
 * /api/v1/resources/delete:
 *   delete:
 *     summary: Delete a resource by its ID
 *     description: Deletes a resource based on the provided resource ID.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               resource_id:
 *                 type: integer
 *                 example: 206
 *     responses:
 *       200:
 *         description: Resource deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: boolean
 *                   example: false
 *                 code:
 *                   type: integer
 *                   example: 200
 *                 message:
 *                   type: string
 *                   example: "OK"
 *                 metadata:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       resource_id:
 *                         type: integer
 *                         example: 206
 *       400:
 *         description: Resource not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: boolean
 *                   example: true
 *                 code:
 *                   type: integer
 *                   example: 400
 *                 message:
 *                   type: string
 *                   example: "Resource not exists"
 *                 metadata:
 *                   type: array
 *                   items: {}
 *       500:
 *         description: Internal server error.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: boolean
 *                   example: true
 *                 code:
 *                   type: integer
 *                   example: 500
 *                 message:
 *                   type: string
 *                   example: "An error occurred while processing the request."
 */