/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedListener,
  TypedContractMethod,
} from "./common";

export interface PersonInterface extends Interface {
  getFunction(
    nameOrSignature: "getPerson" | "updatePersonAge" | "updatePersonName"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "getPerson", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "updatePersonAge",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "updatePersonName",
    values: [string]
  ): string;

  decodeFunctionResult(functionFragment: "getPerson", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "updatePersonAge",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updatePersonName",
    data: BytesLike
  ): Result;
}

export interface Person extends BaseContract {
  connect(runner?: ContractRunner | null): Person;
  waitForDeployment(): Promise<this>;

  interface: PersonInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  getPerson: TypedContractMethod<
    [],
    [[string, bigint] & { name: string; age: bigint }],
    "view"
  >;

  updatePersonAge: TypedContractMethod<
    [newAge: BigNumberish],
    [void],
    "nonpayable"
  >;

  updatePersonName: TypedContractMethod<
    [newName: string],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "getPerson"
  ): TypedContractMethod<
    [],
    [[string, bigint] & { name: string; age: bigint }],
    "view"
  >;
  getFunction(
    nameOrSignature: "updatePersonAge"
  ): TypedContractMethod<[newAge: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "updatePersonName"
  ): TypedContractMethod<[newName: string], [void], "nonpayable">;

  filters: {};
}
