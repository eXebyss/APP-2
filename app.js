const express = require("express");

const envelopesRouter = require("./routes/envelopes");

const app = express();

app.use("/envelopes", envelopesRouter);

// Start server
const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server listening http://localhost:${PORT}`)
});