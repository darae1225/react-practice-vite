import { it, expect, describe, vi } from "vitest"; // 'vi' create a fake function (mock) for testing purpose
import { Product } from "../home/Product";
import { render, screen } from "@testing-library/react"; //'screen' let us check the fake web page
import userEvent from "@testing-library/user-event"; //simulates a click
import axios from "axios";
import { beforeEach } from "vitest";
