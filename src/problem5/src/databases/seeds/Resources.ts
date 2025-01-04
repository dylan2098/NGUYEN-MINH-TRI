import { Knex } from 'knex';
import {Resource} from '../../core/types/resource.type';

function generateResourceData(numResources: number): Resource[] {
    const resources: Resource[] = [];
    for (let i = 1; i <= numResources; i++) {
      const resource: Resource = {
        resource_name: `Resource ${i}`,
        resource_desc: `A resource with description for Resource ${i}`,
        resource_score: Math.floor(Math.random() * (100 - 70 + 1)) + 70, // Random score between 70 and 100,
        resource_status: 1,
      };
  
      resources.push(resource);
    }
    return resources;
  }


export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex('Resources').del();
  
  const resources = generateResourceData(200);

  // Inserts seed entries
  await knex('Resources').insert(resources);
}
