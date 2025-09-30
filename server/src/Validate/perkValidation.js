import Joi from "joi";

// Joi schema for partial updates (PATCH)
const updatePerkSchema = Joi.object({
  title: Joi.string(),
  description: Joi.string(),
  category: Joi.string().valid("food", "tech", "travel", "fitness", "other"),
  discountPercent: Joi.number().min(0).max(100),
  merchant: Joi.string()
}).min(1); // require at least one field

export { updatePerkSchema };