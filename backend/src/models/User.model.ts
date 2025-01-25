import { Optional } from "sequelize";
import {
  Table,
  Column,
  Model,
  PrimaryKey,
  DataType,
  CreatedAt,
  ForeignKey,
  BelongsTo,
  IsEmail,
  AllowNull,
  Default,
  UpdatedAt,
  DefaultScope,
} from "sequelize-typescript";
import School from "src/models/School.model";

type UserAttributes = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  schoolId: string;
};

type UserCreationAttributes = Optional<UserAttributes, "id">;

/**
 * The User model represents a user in the database.
 *
 * @class User
 * @extends Model
 * @property {string} id - The unique identifier of the user
 * @property {string} firstName - The first name of the user
 * @property {string} lastName - The last name of the user
 * @property {string} email - The email of the user
 * @property {string} schoolId - The unique identifier of the school the user belongs to
 * @property {Date} createdAt - The date and time the user was created, automatically generated
 * @property {Date} updatedAt - The date and time the user was last updated, automatically generated
 * @property {School} school - The school the user belongs to
 *
 * @see {@link School}
 */
@DefaultScope(() => ({
  include: School,
}))
@Table({
  tableName: "users",
})
class User extends Model<UserAttributes, UserCreationAttributes> {
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column(DataType.UUID)
  id: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  firstName: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  lastName: string;

  @IsEmail
  @AllowNull(false)
  @Column(DataType.STRING)
  email: string;

  @AllowNull(false)
  @ForeignKey(() => School)
  @Column(DataType.UUID)
  schoolId: string;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;

  // Relationships
  @BelongsTo(() => School, "schoolId")
  school: School;
}

export default User;
