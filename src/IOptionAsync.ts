/**
 * This asynchronous interface describes the possibility of an object oriented option management: access, update and reset to default.
 */
export interface IOptionAsync<TName = string, TValue = string> {
  /**
   * Get the name of the option.
   */
  name(): TName
  /**
   * Get the current value of the option. Can be different from default value.
   */
  value(): Promise<TValue>
  /**
   * Get the default value of the option.
   */
  default(): Promise<TValue>
  /**
   * Reset current value back to the default value.
   */
  reset(): Promise<void>
  /**
   * Update the current value of the option.
   * @param updateFunction is a callback which provides the current value of the option. The (updated) value which shall be the new current value must be returned by this callback.
   */
  update(updateFunction: (currentValue: TValue) => TValue): Promise<void>
}
