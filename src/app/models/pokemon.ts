export interface Pokemon {
  id: number;
  name: string;
  height: number;
  weight: number;
  sprites: {
    other: {
      home: {
        front_default: string;
      };
    };
  };

  stats: [
    {
      base_stat: number;
      effort: number;
      stat: {
        name: string;
        url: string;
      };
    }
  ];

  types: [
    {
      slot: number;
      type: {
        name: string;
      };
    }
  ];
}
