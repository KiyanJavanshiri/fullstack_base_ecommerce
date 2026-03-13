import mongoose from "mongoose";

const { Schema } = mongoose;

const clothingSizes = ["XS", "S", "M", "L", "XL"];
const shoeSizes = ["36", "37", "38", "39", "40", "41", "42", "43", "44"];
const clothingsSubCategory = ["t-shirts", "jackets", "hoodie", "shorts"];
const shoesSubCategory = ["sneakers"];

const productSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "title is required"],
      trim: true,
      minLength: [3, "title is too short"],
      maxLength: [40, "title is too long"],
    },
    description: {
      type: String,
      required: [true, "description is required"],
      trim: true,
      minLength: [10, "title is too short"],
    },
    category: {
      type: String,
      enum: {
        values: ["shoes", "clothing"],
        message: "{VALUE} is not appropriate as category",
      },
      required: [true, "category is required"],
    },
    subCategory: {
      type: String,
      enum: {
        values: [...clothingsSubCategory, ...shoesSubCategory],
        message: "{VALUE} is not correct subcategory for any clothings",
      },
      validate: {
        validator: function (subCategory: string) {
          const allowed =
            this.category === "clothing"
              ? clothingsSubCategory
              : shoesSubCategory;
          return allowed.includes(subCategory);
        },
        message: `subCategory is not correct for your category`,
      },
      required: [true, "subCategory is required"],
    },
    brand: {
      type: String,
      enum: {
        values: ["nike", "adidas", "new-balance"],
        message: "{VALUE} is not existed brand in system",
      },
      required: [true, "brand is required"],
    },
    gender: {
      type: String,
      enum: {
        values: ["men", "women", "unisex"],
        message: "{VALUE} is not correct gender",
      },
      required: [true, "gender is required"],
    },
    sizes: {
      type: [String],
      required: [true, "sizes is required"],
      validate: {
        validator: function (sizes: string[]) {
          const allowed =
            this.category === "clothing" ? clothingSizes : shoeSizes;

          return sizes.every((size) => allowed.includes(size));
        },
        message: "Invalid size for this category",
      },
    },
    price: {
      type: Number,
      min: [0, "too small price"],
      max: [100000, "too big price"],
      required: [true, "price is required"],
    },
    rating: {
      type: Number,
      min: [0, "too small rating"],
      max: [5, "too big rating"],
      validate: {
        validator: Number.isInteger,
        message: "{VALUE} is not an integer value",
      },
      default: 0,
    },
    stock: {
      type: Number,
      min: [0, "too small stock value"],
      validate: {
        validator: Number.isInteger,
        message: "{VALUE} is not an integer value",
      },
      required: [true, "stock is required"],
    },
    images: {
      type: [String],
      default: [],
    },
  },
  {
    timestamps: true,
  },
);

export const Product = mongoose.model("Product", productSchema);
