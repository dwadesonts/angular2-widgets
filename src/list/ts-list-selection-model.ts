export class ListSelectionModel<T> {
  private selection: T;

  public getSelection(): T {
    return this.selection;
  }

  public setSelection(selection: T) {
    this.selection = selection;
  }
}
