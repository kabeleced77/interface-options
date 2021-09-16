export interface IOptionAsync {
  name(): string;
  value(): Promise<string>;
  default(): Promise<string>
  resetToDefaultValue(): Promise<void>;
  update(updateFunction: (currentValue: string) => string): Promise<void>;
}
