const express = require("express");
const cors = require("cors");
const app = express();
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

app.use(cors());

const port = process.env.PORT || 5001;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
