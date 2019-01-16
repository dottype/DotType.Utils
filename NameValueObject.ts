import { NameObject } from "./NameObject";

/** Class containg a Name and Value properties. */
export class NameValueObject extends NameObject
{
    /** Gets or sets the value. */
    private value: any;

    /** Gets the Value. */
    public get Value()
    {
        return this.value;
    }

    /** Sets the Value. */
    public set Value(value)
    {
        this.value = value;
    }

    /**
     * Initializes a new instance of NameValue class.
     * @param name The Name of NameValue class.
     * @param value The Value of NameValue class.
     */
    constructor(name: string, value: any)
    {
        super(name);
        this.Value = value;
    }
}