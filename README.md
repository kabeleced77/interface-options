# interface-options

This package provides Typescript interfaces for an object oriented management of options. Options can be used to influence the way an application works. In order to keep options permanently available - i.e. especially after the program had been closed - they must be saved somewhere. This can be files, databases or browser storages.

The interfaces of this package only suggest a way of providing access to the persistent layer. The actual implementation must come from another package or own application.

## Why?

The idea is to have a common and stable set of interfaces handling options. The business code of the application only relies on interfaces - like those provided by this package - whereas the actual persistent layers can vary.

The second idea is to provide an easy way to cope with changes on the persistent layer. Even a complete change of the technology can come without any impact on the actual business code. Only an new implementation of the interfaces must be used or provided.

## Usage

Following the actual interfaces and possible usages.

### `IOptionsAsync<TName = string, TValue = string>`

This interface describes methods creating and accessing one or all options:

    interface IOptionsAsync<TName = string, TValue = string> {
      options(): Promise<IOptionAsync<TName, TValue>[]>
      option(optionName: TName, defaultValue?: TValue): Promise<IOptionAsync<TName, TValue>>
    }

Generic types are used for names and values of options. Default type is `string`.

#### `IOptionsAsync.options(): Promis<IOptionAsync<TName, TValue>[]>`

Returns all options in an array where each element is of type `IOptionAsync<TName, TValue>`.

_Example_: print name of all options:

    async printAllOptionsNames(options: IOptionsAsync): Promise<void> {
      (await options.options()).forEach((option) => console.log(option.name()))
    }

#### `IOptionsAsync.option(optionName, defaultValue?): Promis<IOptionAsync<TName, TValue>`

Returns the option given by its name. The type of the option is `IOptionAsync<TName, TValue>`.

It is also assumed, that if the option does not exist yet, it will be created and returned.

The default value describes the initial value of the saved option. If not given an internal standard default value is taken.

Once the option is created the default value is actually not needed anymore here.

_Example_: create a new option named `"backgroundColour"` having default value `"#454545"`:

    // 'options' must be instantiated based on actual IOptionsAsync-implementation
    let optionBackgroundColour = await options.option("backgroundColour", "#454545")

### `IOptionAsync<TName = string, TValue = string>`

This interface describes methods accessing, changing and resetting an option:

    interface IOptionAsync<TName = string, TValue = string> {
      name(): TName
      value(): Promise<TValue>
      default(): Promise<TValue>
      reset(): Promise<void>
      update(updateFunction: (currentValue: TValue) => TValue): Promise<void>
    }

Generic types are used for names and values of options. Default type is `string`.

#### `IOptionAsync.name(): TName`

Returns option's name.

_Example_: get name of option named `"backgroundColour"` having default value `"#454545"`:

    // 'options' must be instantiated based on actual IOptionsAsync-implementation
    let optionBackgroundColour = await options.option("backgroundColour", "#454545")
    console.log(await optionBackgroundColour.name())

    // => prints: backgroundColour

#### `IOptionAsync.value(): Promis<TValue>`

Returns option's current value.

If there is no option `undefined` is returned.

_Example_: get value of option named `"backgroundColour"` having default value `"#454545"`:

    // 'options' must be instantiated based on actual IOptionsAsync-implementation
    let optionBackgroundColour = await options.option("backgroundColour", "#454545")
    console.log(await optionBackgroundColour.value())

    // => prints: #454545

#### `IOptionAsync.default(): Promis<TValue>`

Returns option's default value.

If there is no option `undefined` is returned.

_Example_: get default value of option named `"backgroundColour"` having default value `"#454545"`:

    // 'options' must be instantiated based on actual IOptionsAsync-implementation
    let optionBackgroundColour = await options.option("backgroundColour", "#454545")
    console.log(await optionBackgroundColour.default())

    // => prints: #454545

#### `IOptionAsync.reset(): Promise<void>`

Resets option's current value to default value. This is the default value once given when the option had been created - see `IOptionsAsync.option()`.

_Example_: reset to default value of option named `"backgroundColour"` having default value `"#454545"`:

    // 'options' must be instantiated based on actual IOptionsAsync-implementation
    let optionBackgroundColour = await options.option("backgroundColour", "#454545")
    console.log(await optionBackgroundColour.value())
    await optionBackgroundColour.value(() => "#353535")
    console.log(await optionBackgroundColour.value())
    await optionBackgroundColour.reset()
    console.log(await optionBackgroundColour.value())

    // => 1st print: #454545
    // => 2nd print: #353535
    // => 3rd print: #454545

#### `IOptionAsync.update(updateFunction: (currentValue: TValue) => TValue): Promise<void>`

Expects a callback function. The callback receives option's current value. The current value can be used or ignored. The new value of the option is to be returned by the callback.

_Example_: change current value of option named `"backgroundColour"` having default value `"#454545"`:

    // 'options' must be instantiated based on actual IOptionsAsync-implementation
    let optionBackgroundColour = await options.option("backgroundColour", "#454545")
    console.log(await optionBackgroundColour.value())
    await optionBackgroundColour.value((currentValue: string) => "#353535")
    console.log(await optionBackgroundColour.value())

    // => 1st print: #454545
    // => 2nd print: #353535
