import { Optional } from "sequelize";
import {
  Table,
  Column,
  Model,
  PrimaryKey,
  DataType,
  CreatedAt,
  HasMany,
  Scopes,
  Unique,
  AllowNull,
  Default,
} from "sequelize-typescript";
import User from "src/models/User.model";

// Define the attributes of the School model
type SchoolAttributes = {
  id: string;
  name: string;
  domain: string;
};

// Define the creation attributes of the School model
type SchoolCreationAttributes = Optional<SchoolAttributes, "id">;

/**
 * The School model represents a school in the database.
 *
 * @class School
 * @extends Model
 * @property {string} schoolId - The unique identifier of the school
 * @property {string} name - The name of the school
 * @property {string} domain - The domain of the school email, must be unique
 * @property {Date} createdAt - The date and time the school was created, automatically generated
 * @property {User[]} users - The users associated with the school
 *
 * @see {@link User}
 */
@Scopes(() => ({
  withUsers: {
    include: User,
  },
}))
@Table({
  tableName: "schools",
})
class School extends Model<SchoolAttributes, SchoolCreationAttributes> {
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column(DataType.UUID)
  id: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  name: string;

  @Unique
  @AllowNull(false)
  @Column(DataType.STRING)
  domain: string;

  @CreatedAt
  createdAt: Date;

  // Relationships
  @HasMany(() => User)
  users: User[];
}

export default School;
