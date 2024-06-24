  interface IDiscardEntry {
    discardJustification: string;
  }

  interface IDiscardForMessage {
    id: string;
    successfulDiscard:boolean;
  }

  export type { IDiscardEntry, IDiscardForMessage };