import { v4 as uuidv4 } from "uuid";
import bcrypt from "bcryptjs";

import { db } from "./config.js";

export const execSeeds = async () => {
  const hardCodedUserPassword = await bcrypt.hash("sotero@123", 10);

  db.serialize(() => {
    db.run(
      `
      INSERT INTO users (id, first_name, last_name, username, email, password, has_accepted_use_terms) VALUES 
        ("2f2faace-2507-4eaa-bcbe-89892307be30", "Matheus", "Santos", "matheusdoe", "matheusdoe@sotero.com", "${hardCodedUserPassword}", TRUE), ("ecfd772b-212e-45ba-a5d1-be56a453ec22", "Jailson", NULL, "jailson", "jailson@sotero.com", "${hardCodedUserPassword}", TRUE), ("8001e514-7ceb-4661-8cbc-68a22b523cbe", "Henrique", NULL, "henrique", "henrique@sotero.com", "${hardCodedUserPassword}", TRUE), ("6cc9657d-ece8-4198-b2bd-8c4625eb9330", "Isac", NULL, "isac", "isac@sotero.com", "${hardCodedUserPassword}", TRUE), ("054047ce-8b25-4b88-a873-eaa9e5672883", "Arthur", NULL, "arthur", "arthur@sotero.com", "${hardCodedUserPassword}", TRUE), ("d966a661-7912-48a2-adc7-3d8292ef9183", "Fernando", NULL, "fernando", "fernando@sotero.com", "${hardCodedUserPassword}", TRUE), ("705845bf-22b8-4cde-b6d1-6ee9838987ea", "Lucas", NULL, "lucas", "lucas@sotero.com", "${hardCodedUserPassword}", TRUE), ("973343d5-afbd-4d55-9456-5f76306a13bd", "Marcos", NULL, "marcos", "marcos@sotero.com", "${hardCodedUserPassword}", TRUE), ("a5afdf85-356f-4598-bb66-577300037292", "Mauricio", NULL, "mauricio", "mauricio@sotero.com", "${hardCodedUserPassword}", TRUE), ("4a685abc-71ac-4bd4-af50-5ae47a159a61", "Gustavo", NULL, "gustavo", "gustavo@sotero.com", "${hardCodedUserPassword}", TRUE);
    `
    );

    db.run(
      `
      INSERT INTO games_categories (id, name) VALUES 
        ("6004fa08-a779-4b3a-b308-538640bd1301", "Já joguei"), ("cb6563e1-e648-4281-9cb4-4bba4555b80a", "Jogando"), ("4f619e79-ccc2-44c3-81c2-d386c1122288", "Já zerei"), ("62785c52-c1ce-43d4-98ef-06339356ee50", "Não recomendo"), ("dc639c49-e301-406e-bed2-23d896b2f07b", "Penso em jogar"), ("30911665-2657-4a8f-b280-06a84ec06d73", "Quero comprar"), ("5f11951b-989b-4bac-ac2f-15d40962f43c", "Platinei"), 
        ("ea2b5ff0-c342-466d-9e7b-54a477a500a1", "Floopei"), 
        ("061a6eda-984b-43a1-855f-6765af6b20c3 ", "Decepção"), ("aba4773c-61fb-44e2-a110-905aa314b814", "Sonho em jogar");
    `
    );

    db.run(
      `
      INSERT INTO games_platforms (id, name) VALUES 
        ("de92a24f-f2dd-4601-b6ec-dc99806020af", "Steam"), ("d1b55f0d-bca0-410a-a7d9-3a6ae9ab2af8", "Epic Games"), ("61587f06-92bf-4ac3-8903-7d4d9322a482", "Blizzard.net"), ("0d253925-2fa0-4190-abba-fc42795b40c1", "GOG"), ("a52dbb5d-87ee-4751-bfd3-fd6086e0098c", "PSN"), ("ea761c19-e959-4475-baf0-de5072871dfd", "Xbox"), ("7fda470b-ffdd-4b05-81f4-e23a932358c2", "Origin"), 
        ("2a8205c2-26bf-469e-bef1-0db0f7e611d1", "Ubisoft"), 
        ("a6f3a431-e816-456c-aabe-14975244d5fc", "PS2"), ("30be723d-1f0a-42fa-bdf4-ef39eae76b7b", "Nintendo"),("4c2d2e67-42be-4646-b1bd-8900510ca5b4", "Riot Games");
    `
    );

    db.run(
      `
      INSERT INTO games (id, name, cover_url) VALUES 
        ("1b2a7262-c799-4999-989a-96bda254edfc", "League of Legends", "https://static-cdn.jtvnw.net/ttv-boxart/21779-272x380.jpg"), ("c8ed4bde-acf6-4f4c-a528-e5e426b36d61", "Valorant", "https://static.wikia.nocookie.net/dublagem/images/b/bb/Valorant_Postar_2.jpg"), ("7b1918ed-9559-4706-a4c1-417eaadd3761", "Dota 2", "https://i.pinimg.com/originals/8a/8b/50/8a8b50da2bc4afa933718061fe291520.jpg"), ("2b27853c-0cab-41cb-b134-34bd43b95269", "Call of Duty: Modern Warfare", "https://image.api.playstation.com/cdn/UP0002/CUSA03522_00/t7SHaSjuUXFZ3VHl6U4FuSFrDMtkOIyP.png"), ("0003f258-800d-4ee7-bab0-9b6eb0a4458e", "Forza Motorsport", NULL), ("35a8bc90-d13f-4b29-977d-285f39139696", "American Truck Simulator", "https://cdn-products.eneba.com/resized-products/390c72c3457f3045b06b7c3227025372_350x200_3x-0.jpg"), ("7fea46b3-f6e7-4587-b1f1-9964bce29780", "Assetto Corsa Competizione", ""), 
        ("04f04057-c410-4db2-abe6-be87bacc9068", "Grand Theft Auto IV", NULL), 
        ("383826da-c7b8-45ba-8ff7-2da3a7d0e1da", "The Division 2", NULL), ("cb9f8233-8052-466f-ad00-96cf32379b0b", "Counter Strike: Global Ofensive 2", NULL);
    `
    );

    db.run(
      `
      INSERT INTO game_games_plataforms (id, game_id, game_platform_id) VALUES 
        ("${uuidv4()}","1b2a7262-c799-4999-989a-96bda254edfc", "4c2d2e67-42be-4646-b1bd-8900510ca5b4"), ("${uuidv4()}","c8ed4bde-acf6-4f4c-a528-e5e426b36d61", "4c2d2e67-42be-4646-b1bd-8900510ca5b4"), ("${uuidv4()}","7b1918ed-9559-4706-a4c1-417eaadd3761", "de92a24f-f2dd-4601-b6ec-dc99806020af"), ("${uuidv4()}","2b27853c-0cab-41cb-b134-34bd43b95269", "de92a24f-f2dd-4601-b6ec-dc99806020af"), ("${uuidv4()}","0003f258-800d-4ee7-bab0-9b6eb0a4458e", "de92a24f-f2dd-4601-b6ec-dc99806020af"), ("${uuidv4()}","35a8bc90-d13f-4b29-977d-285f39139696", "de92a24f-f2dd-4601-b6ec-dc99806020af"), ("${uuidv4()}","7fea46b3-f6e7-4587-b1f1-9964bce29780", "de92a24f-f2dd-4601-b6ec-dc99806020af"), 
        ("${uuidv4()}","04f04057-c410-4db2-abe6-be87bacc9068", "de92a24f-f2dd-4601-b6ec-dc99806020af"), 
        ("${uuidv4()}","383826da-c7b8-45ba-8ff7-2da3a7d0e1da", "de92a24f-f2dd-4601-b6ec-dc99806020af"), ("${uuidv4()}","cb9f8233-8052-466f-ad00-96cf32379b0b", "de92a24f-f2dd-4601-b6ec-dc99806020af");
    `
    );

    db.run(
      `
        INSERT INTO user_game (id, user_id, game_id) VALUES
          ("4a8155e0-d505-4488-8d0a-f9d95d8e2c64", "2f2faace-2507-4eaa-bcbe-89892307be30", "1b2a7262-c799-4999-989a-96bda254edfc"), ("0f326076-20e3-4767-a5c0-d33f3e00c7c5", "2f2faace-2507-4eaa-bcbe-89892307be30", "35a8bc90-d13f-4b29-977d-285f39139696"), ("be0677a6-8313-4a85-8b2d-f591c4909c4b", "2f2faace-2507-4eaa-bcbe-89892307be30", "04f04057-c410-4db2-abe6-be87bacc9068"), ("2bcdb722-e814-4c84-b9d2-f088a7454500", "2f2faace-2507-4eaa-bcbe-89892307be30", "383826da-c7b8-45ba-8ff7-2da3a7d0e1da"), ("7b33049a-6db5-4e68-9403-f5cc5a7a6bbb", "2f2faace-2507-4eaa-bcbe-89892307be30", "cb9f8233-8052-466f-ad00-96cf32379b0b"), ("ec4101e1-9865-4065-ba9a-a123e973350b", "8001e514-7ceb-4661-8cbc-68a22b523cbe", "1b2a7262-c799-4999-989a-96bda254edfc"), ("be0a73ac-7c6c-4b9c-a391-338ba1f43333", "8001e514-7ceb-4661-8cbc-68a22b523cbe", "04f04057-c410-4db2-abe6-be87bacc9068"), ("11ecf9fc-c016-47fb-8bb7-2f533facd7a6", "8001e514-7ceb-4661-8cbc-68a22b523cbe", "cb9f8233-8052-466f-ad00-96cf32379b0b"), ("60a80062-dce3-4d1f-b7b6-11e19f839a14", "6cc9657d-ece8-4198-b2bd-8c4625eb9330", "1b2a7262-c799-4999-989a-96bda254edfc"), ("44321b50-f8f5-4017-852b-6de4aeaddb0f", "6cc9657d-ece8-4198-b2bd-8c4625eb9330", "04f04057-c410-4db2-abe6-be87bacc9068");
      `
    );

    db.run(
      `
        INSERT INTO user_game_categories (id, game_category_id, user_game_id) VALUES
          ("${uuidv4()}","6004fa08-a779-4b3a-b308-538640bd1301","4a8155e0-d505-4488-8d0a-f9d95d8e2c64"), ("${uuidv4()}","6004fa08-a779-4b3a-b308-538640bd1301", "0f326076-20e3-4767-a5c0-d33f3e00c7c5"), ("${uuidv4()}","6004fa08-a779-4b3a-b308-538640bd1301", "be0677a6-8313-4a85-8b2d-f591c4909c4b"), ("${uuidv4()}","6004fa08-a779-4b3a-b308-538640bd1301","2bcdb722-e814-4c84-b9d2-f088a7454500"), ("${uuidv4()}","6004fa08-a779-4b3a-b308-538640bd1301","7b33049a-6db5-4e68-9403-f5cc5a7a6bbb"), ("${uuidv4()}","6004fa08-a779-4b3a-b308-538640bd1301", "ec4101e1-9865-4065-ba9a-a123e973350b"), ("${uuidv4()}","6004fa08-a779-4b3a-b308-538640bd1301","be0a73ac-7c6c-4b9c-a391-338ba1f43333"), ("${uuidv4()}","6004fa08-a779-4b3a-b308-538640bd1301","11ecf9fc-c016-47fb-8bb7-2f533facd7a6"), ("${uuidv4()}","6004fa08-a779-4b3a-b308-538640bd1301","60a80062-dce3-4d1f-b7b6-11e19f839a14"), ("${uuidv4()}","6004fa08-a779-4b3a-b308-538640bd1301","44321b50-f8f5-4017-852b-6de4aeaddb0f");
      `
    );
  });
};
