import { IOptionAsync } from "../src/IOptionAsync";
import { IOptionsAsync } from "../src/IOptionsAsync";

describe("IOptionsAsync interface", () => {
  it("ensures interface description", async () => {
    ({
      options: () => new Promise<IOptionAsync[]>(() => []),
      add: (name: string, value: string, defaultValue: string) => {},
    } as IOptionsAsync);
  });
});
