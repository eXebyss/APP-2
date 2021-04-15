const express = require("express");
const router = express.Router();

const {
    getEnvelopes,
      getEnvelopeById,
      getEnvelopeTransactions,
    addEnvelope,
    deleteEnvelope,
      updateEnvelope,
      addEnvelopeTransaction,
} = require("../controllers/envelopes");

router.get("/", getEnvelopes);

router.get("/:id", getEnvelopeById);

router.post("/", addEnvelope);

router.put("/:id", updateEnvelope);

router.delete("/:id", deleteEnvelope);

router.get('/:id/transactions', getEnvelopeTransactions);

router.post('/:id/transactions', addEnvelopeTransaction);

module.exports = router;