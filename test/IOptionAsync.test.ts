import { IOptionAsync } from "../src/IOptionAsync";

describe("IOptionAsync interface", () => {
  it("ensures interface description", async () => {
    ({
      name: () => "",
      value: () => new Promise<string>(resolve => resolve("")),
      default: () => new Promise<string>(resolve => resolve("")),
      resetToDefaultValue: () => new Promise<void>(resolve => resolve()),
      update: (updateFunction: (currentValue: string) => string) =>
        new Promise<void>(resolve => resolve()),
    } as IOptionAsync);
  });
});
