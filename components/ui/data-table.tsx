"use client";

import * as React from "react";
import {
    ColumnDef,
    ColumnFiltersState,
    SortingState,
    VisibilityState,
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable,
} from "@tanstack/react-table";
import { ChevronsUpDown, MoreHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

export type Payment = {
    id: string;
    amount: number;
    status: "pending" | "processing" | "success" | "failed";
    email: string;
};

export const columns: ColumnDef<Payment>[] = [
    {
        id: "select",
        header: ({ table }) => (
            <Checkbox
                checked={
                    table.getIsAllPageRowsSelected() ||
                    (table.getIsSomePageRowsSelected() &&
                        "indeterminate")
                }
                onCheckedChange={(value) =>
                    table.toggleAllPageRowsSelected(!!value)
                }
                aria-label="Select all"
                className="shadow-none"
            />
        ),
        cell: ({ row }) => (
            <Checkbox
                checked={row.getIsSelected()}
                onCheckedChange={(value) =>
                    row.toggleSelected(!!value)
                }
                aria-label="Select row"
                className="shadow-none"
            />
        ),
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: "status",
        header: () => (
            <div className="font-medium text-xs mt-0.5">Status</div>
        ),
        cell: ({ row }) => (
            <div className="capitalize font-medium text-xs">
                {row.getValue("status")}
            </div>
        ),
    },
    {
        accessorKey: "email",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() =>
                        column.toggleSorting(
                            column.getIsSorted() === "asc"
                        )
                    }
                    className="!p-1"
                >
                    <div className="font-medium text-xs mt-0.5">
                        Email
                    </div>
                    <ChevronsUpDown
                        className="text-[#71717A] mt-0.5"
                        style={{ width: "12px", height: "15px" }}
                    />
                </Button>
            );
        },
        cell: ({ row }) => (
            <div className="lowercase font-medium text-xs">
                {row.getValue("email")}
            </div>
        ),
    },
    {
        accessorKey: "amount",
        header: () => (
            <div className="font-medium text-xs mt-0.5">Amount</div>
        ),
        cell: ({ row }) => {
            const amount = parseFloat(row.getValue("amount"));

            // Format the amount as a dollar amount
            const formatted = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
            }).format(amount);

            return (
                <div className="font-medium text-xs">{formatted}</div>
            );
        },
    },
    {
        id: "actions",
        enableHiding: false,
        cell: ({ row }) => {
            const payment = row.original;

            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button
                            variant="ghost"
                            className="h-8 w-8 !p-1"
                        >
                            <span className="sr-only">Open menu</span>
                            <MoreHorizontal />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem
                            onClick={() =>
                                navigator.clipboard.writeText(
                                    payment.id
                                )
                            }
                        >
                            Copy payment ID
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                            View customer
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            View payment details
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            );
        },
    },
];

type DataTableProps = {
    data: Payment[];
};

export function DataTable({ data } : DataTableProps) {
    const [sorting, setSorting] = React.useState<SortingState>([]);
    const [columnFilters, setColumnFilters] =
        React.useState<ColumnFiltersState>([]);
    const [columnVisibility, setColumnVisibility] =
        React.useState<VisibilityState>({});
    const [rowSelection, setRowSelection] = React.useState({});
    const [pagination, setPagination] = React.useState({
        pageIndex: 0,
        pageSize: 5,
    });

    const table = useReactTable({
        data,
        columns,
        onSortingChange: setSorting,
        onColumnFiltersChange: setColumnFilters,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        onColumnVisibilityChange: setColumnVisibility,
        onRowSelectionChange: setRowSelection,
        state: {
            sorting,
            columnFilters,
            columnVisibility,
            rowSelection,
            pagination,
        },
    });

    return (
        <div className="max-w-[553px]">
            <div className="flex items-center py-4">
                <Input
                    placeholder="Filter emails..."
                    value={
                        (table
                            .getColumn("email")
                            ?.getFilterValue() as string) ?? ""
                    }
                    onChange={(event) =>
                        table
                            .getColumn("email")
                            ?.setFilterValue(event.target.value)
                    }
                    className="max-w-sm font-medium pt-2.75 pb-1.75 shadow-none w-75 placeholder-red-600"
                />
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button
                            variant="outline"
                            className="ml-auto w-25 pt-3 pb-2.5 text-xs shadow-none ml-auto"
                        >
                            Columns{" "}
                            <ChevronsUpDown
                                className="text-[#71717A]"
                                style={{
                                    width: "12px",
                                    height: "15px",
                                }}
                            />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        {table
                            .getAllColumns()
                            .filter((column) => column.getCanHide())
                            .map((column) => {
                                return (
                                    <DropdownMenuCheckboxItem
                                        key={column.id}
                                        className="capitalize"
                                        checked={column.getIsVisible()}
                                        onCheckedChange={(value) =>
                                            column.toggleVisibility(
                                                !!value
                                            )
                                        }
                                    >
                                        {column.id}
                                    </DropdownMenuCheckboxItem>
                                );
                            })}
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
            <div className="rounded-md border w-full">
                <Table>
                    <TableHeader>
                        {table
                            .getHeaderGroups()
                            .map((headerGroup) => (
                                <TableRow key={headerGroup.id}>
                                    {headerGroup.headers.map(
                                        (header) => {
                                            return (
                                                <TableHead
                                                    key={header.id}
                                                    className="px-3.5 pb-1 pt-1.25"
                                                >
                                                    {header.isPlaceholder
                                                        ? null
                                                        : flexRender(
                                                              header
                                                                  .column
                                                                  .columnDef
                                                                  .header,
                                                              header.getContext()
                                                          )}
                                                </TableHead>
                                            );
                                        }
                                    )}
                                </TableRow>
                            ))}
                    </TableHeader>
                    <TableBody>
                        {table.getRowModel().rows?.length ? (
                            table
                                .getRowModel()
                                .rows.map((row, index, rows) => (
                                    <TableRow
                                        key={row.id}
                                        data-state={
                                            row.getIsSelected() &&
                                            "selected"
                                        }
                                    >
                                        {row
                                            .getVisibleCells()
                                            .map(
                                                (cell, cellIndex) => (
                                                    <TableCell
                                                        key={cell.id}
                                                        className={[
                                                            "px-3.5 py-1.5",
                                                            index ==
                                                                rows.length -
                                                                    1 &&
                                                                "pb-0",
                                                            cellIndex ==
                                                                4 &&
                                                                "pr-2.5 flex justify-end",
                                                        ].join(" ")}
                                                    >
                                                        {flexRender(
                                                            cell
                                                                .column
                                                                .columnDef
                                                                .cell,
                                                            cell.getContext()
                                                        )}
                                                    </TableCell>
                                                )
                                            )}
                                    </TableRow>
                                ))
                        ) : (
                            <TableRow>
                                <TableCell
                                    colSpan={columns.length}
                                    className="h-24 text-center"
                                >
                                    No results.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
            <div className="flex items-center justify-end space-x-2 py-3">
                <div className="flex-1 text-sm text-muted-foreground font-medium text-xs">
                    {table.getFilteredSelectedRowModel().rows.length}{" "}
                    of {table.getFilteredRowModel().rows.length}{" "}
                    row(s) selected.
                </div>
                <div className="space-x-2">
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => {
                            table.previousPage();
                            setPagination({
                                pageIndex: pagination.pageIndex - 1,
                                pageSize: 5,
                            });
                        }}
                        disabled={!table.getCanPreviousPage()}
                        className="!h-auto px-4 py-3 shadow-none"
                    >
                        Previous
                    </Button>
                    <Button
                        variant="default"
                        size="sm"
                        onClick={() => {
                            table.nextPage();
                            setPagination({
                                pageIndex: pagination.pageIndex + 1,
                                pageSize: pagination.pageSize,
                            });
                        }}
                        disabled={!table.getCanNextPage()}
                        className="!h-auto px-4 py-3 shadow-none bg-gradient-to-r from-[#FF9B3E] to-[#FF343B]"
                    >
                        Next
                    </Button>
                </div>
            </div>
        </div>
    );
}
