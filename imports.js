import { Blockscon } from '../../api/blocks/blocks.js';
import { Proposals } from '../../api/proposals/proposals.js';

Evidences.rawCollection().createIndex({ height: -1 });

Proposals.rawCollection().createIndex({ proposalId: 1 }, { unique: true });

Recipes.rawCollection().createIndex({ ID: "1", NO: -1 }, { unique: true });
