

export type Unsigned32Bit = number;
export type Unsigned16Bit = number;
export type Unsigned8Bit = number;


export enum CPURegister {
  Data0 = 0,
  Data1 = 1,
  Data2 = 2,
  Data3 = 3,
  Data4 = 4,
  Data5 = 5,
  Data6 = 6,
  Data7 = 7,
  Data8 = 8,
  Data9 = 9,
  Data10 = 10,
  Data11 = 11,
  Data12 = 12,

  StackPointer = 13,
  LinkRegister = 14,
  ProgramCounter = 15,
  StatusRegister = 16
}

export enum ProcessorMode {
  User = 0x10,
  FastInterrupt = 0x11,
  NormalInterrupt = 0x12,
  Supervisor = 0x13,
  MemoryAbort = 0x17,
  UndefinedInstr = 0x1B,
  System = 0x1F
}
