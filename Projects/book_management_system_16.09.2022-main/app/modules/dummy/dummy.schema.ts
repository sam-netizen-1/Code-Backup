

class DummySchema {
    public static dummyDb: any[] = [];

    get() {
        return DummySchema.dummyDb;
    }
}

const dummySchema = new DummySchema();

export default dummySchema;