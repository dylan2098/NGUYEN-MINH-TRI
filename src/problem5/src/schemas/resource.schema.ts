const properties = {
  resource_id: {
    type: 'number',
  },
  resource_name: {
    type: 'string',
  },
  resource_desc: {
    type: 'string',
  },
  resource_score: {
    type: 'number',
  },
};

const columnRequired = ['resource_name', 'resource_score'];

export default {
  type: 'object',
  properties: properties,
  required: columnRequired,
  additionalProperties: false,
};
