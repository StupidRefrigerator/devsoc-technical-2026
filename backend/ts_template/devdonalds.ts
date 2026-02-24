import express, { Request, Response } from "express";

// ==== Type Definitions, feel free to add or modify ==========================
interface cookbookEntry {
  name: string;
  type: string;
}

interface requiredItem {
  name: string;
  quantity: number;
}

interface recipe extends cookbookEntry {
  requiredItems: requiredItem[];
}

interface ingredient extends cookbookEntry {
  cookTime: number;
}

// =============================================================================
// ==== HTTP Endpoint Stubs ====================================================
// =============================================================================
const app = express();
app.use(express.json());

// Store your recipes here!
const cookbook: any[] = [];

// Task 1 helper (don't touch)
app.post("/parse", (req: Request, res: Response) => {
  const { input } = req.body;

  const parsed_string = parse_handwriting(input);
  if (parsed_string == null) {
    res.status(400).send("this string is cooked");
    return;
  }
  res.json({ msg: parsed_string });
  return;
});

// [TASK 1] ====================================================================
// Takes in a recipeName and returns it in a form that
const parse_handwriting = (recipeName: string): string | null => {
  // replace all hyphens and underscores with spaces
  // necessary to have space between words for string splitting
  let result = recipeName.replace(/[-_]/g, " ");

  // keep just alphabet and spaces
  result = result.replace(/[^a-zA-Z ]/g, "");

  // split into 2 words
  const words = result.split(" ").filter((word) => word.length > 0);
  if (words.length === 0) {
    return null;
  }

  // capitalize the first letter, join words and return
  return words
    .map((word) => {
      const firstLetter = word.charAt(0).toUpperCase();
      const rest = word.slice(1).toLowerCase();
      return firstLetter + rest;
    })
    .join(" ");
};

// [TASK 2] ====================================================================
// Endpoint that adds a CookbookEntry to your magical cookbook
app.post("/entry", (req: Request, res: Response) => {
  const entry = req.body;

  // type can only be "recipe" or "ingredient"
  if (entry.type !== "recipe" && entry.type !== "ingredient") {
    return res.status(400).send("Invalid type");
  }

  // entry names must be unique
  if (cookbook.some((e) => e.name === entry.name)) {
    return res.status(400).send("Entry name must be unique");
  }

  if (entry.type === "ingredient") {
    // cookTime can only be greater than or equal to 0
    if (typeof entry.cookTime !== "number" || entry.cookTime < 0) {
      return res.status(400).send("Invalid cookTime");
    }
    cookbook.push(entry as ingredient);

  } else {
    // recipe requiredItems can only have one element per name
    const seenNames = new Set<string>();

    for (const item of entry.requiredItems) {
      if (seenNames.has(item.name)) {
        return res.status(400).send("Duplicate requiredItem name");
      }
      seenNames.add(item.name);
    }
    cookbook.push(entry as recipe);
  }

  return res.status(200).send();
});

// [TASK 3] ====================================================================
// Endpoint that returns a summary of a recipe that corresponds to a query name
app.get("/summary", (req: Request, res: Request) => {
  // TODO: implement me
  res.status(500).send("not yet implemented!");
});

// =============================================================================
// ==== DO NOT TOUCH ===========================================================
// =============================================================================
const port = 8080;
app.listen(port, () => {
  console.log(`Running on: http://127.0.0.1:8080`);
});
