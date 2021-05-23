export class NoDifferentLedgers extends Error {
  constructor(message?: any) {
    message ? super(message) : super();
    this.message = 'All transactions need to belong to the same ledger.';
    this.name = 'NoDifferentLedgers';
    Error.captureStackTrace(this, NoDifferentLedgers);
  }
}

export class MultipleTxsRequireGroup extends Error {
  constructor(message?: any) {
    message ? super(message) : super();
    this.message = 'If signing multiple transactions, they need to belong to a same group.';
    this.name = 'MultipleTxsRequireGroup';
    Error.captureStackTrace(this, MultipleTxsRequireGroup);
  }
}

export class NonMatchingGroup extends Error {
  constructor(message?: any) {
    message ? super(message) : super();
    this.message = 'All transactions need to belong to the same group.';
    this.name = 'NonMatchingGroup';
    Error.captureStackTrace(this, NonMatchingGroup);
  }
}

export class IncompleteOrDisorderedGroup extends Error {
  constructor(message?: any) {
    message ? super(message) : super();
    this.message =
      'The transaction group is incomplete or presented in a different order than when it was created.';
    this.name = 'IncompleteOrDisorderedGroup';
    Error.captureStackTrace(this, IncompleteOrDisorderedGroup);
  }
}

export class InvalidSigners extends Error {
  constructor(message?: any) {
    message ? super(message) : super();
    this.message =
      'Signers should only be provided for multisigs or set as none (empty array) for reference-only transactions belonging to a group.';
    this.name = 'InvalidSigners';
    Error.captureStackTrace(this, InvalidSigners);
  }
}
